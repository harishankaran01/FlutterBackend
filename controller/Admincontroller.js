const express = require("express");
const loginModel = require("../Models/AdminModel");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const LoginUser = async (req, res, next) => {
    const { userId, password } = req.body;
    if (!userId || !password) {
        return res.status(404).json({ error: "Enter UserId and Password" });
    }

    let User;
    try {
        User = await loginModel.findOne({ userId });
        if (!User) {
            return res.status(404).json({ error: "No User Found" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Error raised in MongoDB" });
    }

    try {
        const validPassword = await bcrypt.compare(password, User.password);
        if (!validPassword) {
            return res.status(403).json({ error: "Password didn't Match" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Error raised in bcrypt" });
    }

    res.json({ message: "Login Successful" });
};

module.exports = LoginUser;
