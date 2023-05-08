const express = require("express");
const router = express.Router();

const { Question } = require("../models");
const { authenticate } = require("../middlewares/auth");

// Create a new question
router.post("/", authenticate, async (req, res) => {
  try {
    const newQuestion = {
      name: req.body.name,
    };
    const question = await Question.create(newQuestion);
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ message: "Error creating question", error });
  }
});

// Get all questions
router.get("/", async (req, res) => {
  try {
    const questions = await Question.findAll();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving questions", error });
  }
});

// Get a specific question by ID
router.get("/:id", authenticate, async (req, res) => {
  try {
    const question = await Question.findByPk(req.params.id);

    if (!question) {
      res.status(404).json({ message: "Question not found" });
    } else {
      res.json(question);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving question", error });
  }
});

// Update a question by ID
router.put("/:id", authenticate, async (req, res) => {
  const { scenario } = req.body;
  try {
    const newQuestion = {};
    if (scenario !== undefined) {
      newQuestion.scenario = scenario;
    }
    const [updated] = await Question.update(newQuestion, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedQuestion = await Question.findByPk(req.params.id);
      res.json(updatedQuestion);
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating question", error });
  }
});

// Delete a question by ID
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const deleted = await Question.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json({ message: "Question deleted" });
    } else {
      res.status(404).json({ message: "Question not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting question", error });
  }
});

module.exports = router;