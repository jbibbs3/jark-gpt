const express = require("express");
const router = express.Router();

const { Quiz } = require("../models");
const { authenticate } = require("../middlewares/auth");

// Create a new quiz
router.post("/", authenticate, async (req, res) => {
  try {
    const newQuiz = {
      name: req.body.name,
    };
    const quiz = await Quiz.create(newQuiz);
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ message: "Error creating quiz", error });
  }
});

// Get all quizzes
router.get("/", async (req, res) => {
  try {
    const quizzes = await Quiz.findAll();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving quizzes", error });
  }
});

// Get a specific quiz by ID
router.get("/:id", authenticate, async (req, res) => {
  try {
    const quiz = await Quiz.findByPk(req.params.id);

    if (!quiz) {
      res.status(404).json({ message: "Quiz not found" });
    } else {
      res.json(quiz);
    }
  } catch (error) {
    res.status(500).json({ message: "Error retrieving quiz", error });
  }
});

// Update a quiz by ID
router.put("/:id", authenticate, async (req, res) => {
  const { name } = req.body;
  try {
    const newQuiz = {};
    if (name !== undefined) {
      newQuiz.name = name;
    }
    const [updated] = await Quiz.update(newQuiz, {
      where: { id: req.params.id },
    });

    if (updated) {
      const updatedQuiz = await Quiz.findByPk(req.params.id);
      res.json(updatedQuiz);
    } else {
      res.status(404).json({ message: "Quiz not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating quiz", error });
  }
});

// Delete a quiz by ID
router.delete("/:id", authenticate, async (req, res) => {
  try {
    const deleted = await Quiz.destroy({
      where: { id: req.params.id },
    });

    if (deleted) {
      res.status(204).json({ message: "Quiz deleted" });
    } else {
      res.status(404).json({ message: "Quiz not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting quiz", error });
  }
});

module.exports = router;