import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { mask_name } from "../utils/anonymizeData.js";

const anonymize = asyncHandler((req, res) => {
    try {
        const { data } = req.body;
        if (!data) {
            throw new ApiError(400, "data is required");
        }
        const anonymizedData = mask_name(data);

        if (!anonymizedData) {
            throw new ApiError(400, "Unable to masked data");
        }
        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    anonymizedData,
                    "Data is successfully masked"
                )
            );
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while generating refresh and access token"
        );
    }
});

export { anonymize };
