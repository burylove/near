import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const GSTToken = atomWithStorage("GST",0)
const GMTToken = atom(112312)
const NEARToken = atom(1111)


const PeopleAvatar = atom("https://cdn.discordapp.com/attachments/897398778166906911/967989384240574484/finish.png")
const PeopleEmail = atom('Zombiesliu@gamil.com')
const PeopleName = atom("David")
const PeopleGender = atom("secret")

const OpenAvatar = atom(false)
const OpenName = atom(false)
const OpenGender = atom(false)




export {GSTToken,GMTToken,NEARToken,PeopleAvatar,PeopleEmail,PeopleName,PeopleGender,OpenAvatar,OpenName,OpenGender}

