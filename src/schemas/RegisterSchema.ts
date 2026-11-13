import * as v from "valibot"
export const RegisterSchema = v.object({

    firstName: v.pipe(
        v.string(),
        v.nonEmpty("First name is required")
    ),

    lastName: v.pipe(
        v.string(),
        v.nonEmpty("Last name is required")
    ),

    age: v.pipe(
        v.string(),
        v.nonEmpty("Age is required"),
        v.transform(Number),
        v.number(),
        v.minValue(18, "You must be at least 18 years old")
    ),

    email: v.pipe(
        v.string(),
        v.nonEmpty("Email is required"),
        v.email("Enter a valid email")
    ),

    username: v.pipe(
        v.string(),
        v.nonEmpty("Username is required")
    ),

    password: v.pipe(
        v.string(),
        v.nonEmpty("Password is required"),
        v.minLength(6, "Minimum 6 characters required")
    ),

});