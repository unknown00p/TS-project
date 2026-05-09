import { publishSignupEvent } from "./src/event-producer/publishSignup.Event"

const triggerEvent = async() =>{
    await publishSignupEvent.add("user-signup",{
        id: 1,
        email: "test@learning-ts.com"
    })

    process.exit()
}

triggerEvent()