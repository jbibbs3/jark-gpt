const express = require("express");
const router = express.Router();

const { Answer } = require("../models");
const { authenticate } = require("../middlewares/auth");

// Create a new answer
router.post("/", authenticate, async (req, res) => {
  try {
    const newAnswer = {
      name: req.body.name,
    };
    const answer = await Answer.create(newAnswer);
    res.status(201).json(answer);
  } catch (error) {
    res.status(500).json({ message: "Error creating answer", error });
  }
});

// Get all answers
router.get("/", async (req, res) => {
  try {
    const answers = await Answer.findAll();
    res.json(answers);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving answers", error });
  }
});

// Get a specific answer by ID
router.get("/:id", authenticate, async (req, res) => {
  try {
    const answer = await Answer.findByPk(req.params.id);

    if (!answer) {
      res.status(404).json({ message: "answer not found" });
    } else {
      res.json(answer);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving answer", error });
  }
});

// Update an answer by ID
router.put("/:id", authenticate, async (req, res) => {
  const { choice, questionId } = req.body;
  try {
    const newAnswer = {};
    if (choice !== undefined) {
      newAnswer.choice = choice;
    }
    if (questionId !== undefined) {
      newAnswer.questionId = questionId;
    }
    const [updated] = await Answer.update(newAnswer, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedanswer = await Answer.findByPk(req.params.id);
      res.json(updatedanswer);
    } else {
      res.status(404).json({ message: "Answer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating answer", error });
  }
});

// Delete an answer by ID
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const deleted = await Answer.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json({ message: "Answer deleted" });
    } else {
      res.status(404).json({ message: "Answer not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting answer", error });
  }
});

module.exports = router;