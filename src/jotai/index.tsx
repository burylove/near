import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const GSTToken = atomWithStorage("GST",0)
const GMTToken = atomWithStorage('GMT',0)
const NEARToken = atomWithStorage('NEAR',0)


const NearAccount = atomWithStorage("nearAccount",'')
const PeopleAvatar = atom("https://cdn.discordapp.com/attachments/897398778166906911/967989384240574484/finish.png")
const PeopleEmail = atomWithStorage("user_Email",'Zombiesliu@gamil.com')
const PeopleName = atomWithStorage("user_Name","Learning")
const PeopleGender = atomWithStorage("user_Gender","secret")
const PublicKey = atomWithStorage("publicKey","")
const SecretKey = atomWithStorage("SecretKey","")
const SeedPhrase = atomWithStorage("SeedPhrase","")
const OpenAvatar = atom(false)
const OpenName = atom(false)
const OpenGender = atom(false)



const LoadingState  = atom(false)


export {GSTToken,GMTToken,NEARToken,PeopleAvatar,PeopleEmail,NearAccount,PeopleName,PublicKey,SecretKey,SeedPhrase,PeopleGender,OpenAvatar,OpenName,OpenGender
,LoadingState}

