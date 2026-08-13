import { User } from "..models/user.models.js";
import { ApiError } from "../utils/api-error";
import { asyncHandler } from "../utils/async-handler";

export const verifyJWT = asyncHandler(async (req, res, next) => {
  req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    throw new ApiError(401, "Unauthorized request");
  }

  try {
    const decodedToken = JsonWebTokenError.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
    );
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken -emailVerificationToken -emailVerificationExpiry",
    );

    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, "Invalid access token");
  }
});
