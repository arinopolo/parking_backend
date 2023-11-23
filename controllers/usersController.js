const express = require("express");
const crypto = require("crypto");

let users = [];

const getUsers = (req, res) => {
  res.json(users);
};

const getUser = (req, res) => {
  const { userId } = req.params;

  for (const user of users) {
    if (user.id === userId) {
      res.json(user);
      return;
    }
  }
  res.send("No se ha encontrado el usuario");
};

const addUser = (req, res) => {
  const user = req.body;
  user.id = crypto.randomUUID();
  users.push(user);
  res.send(user);
};

const deleteUser = (req, res) => {
  const { userId } = req.params;
  users = users.filter((user) => user.id !== userId);
  res.json(`hemos borrado al ${userId}`);
};

module.exports = { getUsers, getUser, addUser, deleteUser };
