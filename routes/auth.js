const createError = require("http-error");
const express = require("express");

const router = express.Router();

const supabase = require("../handlers/supabase");
const { schema } = require("../handlers/validation");

router.post("/register", async (req, res, next) => {
  try {
    const result = await schema.validateAsync(req.body);
    const { user, error } = await supabase.auth.signUp({
      email: result.email,
      password: result.password,
    });
    if (error) throw error;
    res.send({
      id: user.id,
    });
  } catch (error) {
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const result = await schema.validateAsync(req.body);
    const { user, error } = await supabase.auth.signUp({
      email: result.email,
      password: result.password,
    });
    if (error) throw error;
    res.send({
      id: user.id,
    });
  } catch (error) {
    if (error.isJoi == true) error.status = 422;
    next(error);
  }
});

module.exports = router;
