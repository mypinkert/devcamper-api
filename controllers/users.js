const User = require('../models/User');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');

// @desc Get all user
// @route GET /api/v1/auth/users
// @access Public
exports.getUsers = asyncHandler(async (req,res, next) => {
    res.status(200).json(res.advancedResults);
 });

// @desc Get single user
// @route GET /api/v1/auth/users/:id
// @access Public
exports.getUser = asyncHandler(async (req,res, next) => {
    const user = await User.findById(req.params.id);
    
    res.status(200).json({
        success: true,
        data: user
    });
 });

// @desc Create user
// @route POST /api/v1/auth/users
// @access Public
exports.createUser = asyncHandler(async (req,res, next) => {
    const user = await User.create(req.body);

    res.status(201).json({
        success: true,
        data: user
    });
 });

// @desc Update user
// @route PUT /api/v1/auth/users/:id
// @access Public
exports.updateUser = asyncHandler(async (req,res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    });

    res.status(200).json({
        success: true,
        data: user
    });
 });

// @desc Delete user
// @route PUT /api/v1/auth/users/:id
// @access Public
exports.deleteUser = asyncHandler(async (req,res, next) => {
   await User.findByIdAndDelete(req.params.id);

    res.status(200).json({
        success: true,
        data: {}
    });
 });