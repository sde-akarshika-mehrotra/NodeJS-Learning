import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";


const registerUser = asyncHandler (async (req, res) => {
    const {email, username, password, role} = req.body

    const existedUser = await User.findOne ({
        $or: [{username}, {email}]
    })
})
