const express = require('express');
const router = express.Router();
const Event = require('../models/Event');

// @route   GET api/events
// @desc    Get all events
// @access  Public
router.get('/', async (req, res) => {
    try {
        const events = await Event.find().sort({ date: 1 }); // Sort by date ascending
        res.json(events);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   GET api/events/:id
// @desc    Get single event by ID
// @access  Public
router.get('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) {
            return res.status(404).json({ msg: 'Event not found' });
        }
        res.json(event);
    } catch (err) {
        console.error(err.message);
        if (err.kind === 'ObjectId') { // Handle invalid ObjectId format
            return res.status(404).json({ msg: 'Event not found' });
        }
        res.status(500).send('Server Error');
    }
});


// @route   POST api/events
// @desc    Create an event
// @access  Private (you'd add authentication middleware here later)
router.post('/', async (req, res) => {
    const { title, description, date, time, type, imageUrl } = req.body;

    try {
        const newEvent = new Event({
            title,
            description,
            date,
            time,
            type,
            imageUrl
            // isPastEvent will be derived from the date on the frontend or set manually if needed
        });

        const event = await newEvent.save();
        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   PUT api/events/:id
// @desc    Update an event
// @access  Private
router.put('/:id', async (req, res) => {
    const { title, description, date, time, type, imageUrl, isPastEvent } = req.body;

    // Build event object
    const eventFields = {};
    if (title) eventFields.title = title;
    if (description) eventFields.description = description;
    if (date) eventFields.date = date;
    if (time) eventFields.time = time;
    if (type) eventFields.type = type;
    if (imageUrl) eventFields.imageUrl = imageUrl;
    if (isPastEvent !== undefined) eventFields.isPastEvent = isPastEvent;

    try {
        let event = await Event.findById(req.params.id);

        if (!event) return res.status(404).json({ msg: 'Event not found' });

        event = await Event.findByIdAndUpdate(
            req.params.id,
            { $set: eventFields },
            { new: true } // Return the updated document
        );

        res.json(event);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route   DELETE api/events/:id
// @desc    Delete an event
// @access  Private
router.delete('/:id', async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) return res.status(404).json({ msg: 'Event not found' });

        await Event.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Event removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;