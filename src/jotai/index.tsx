import { useAtom ,atom} from 'jotai'
import { atomWithStorage } from 'jotai/utils'

const GSTToken = atomWithStorage("GST",0)
const GMTToken = atomWithStorage('GMT',0)
const NEARToken = atomWithStorage('NEAR',0)

const ExternalNEARToken = atomWithStorage('ExternalNEAR',0)
const ExternalGSTToken = atomWithStorage("ExternalGST",0)
const ExternalGMTToken = atomWithStorage('ExternalGMT',0)
const ExternalUSNToken = atomWithStorage('ExternalUSN',0)

const NearAccount = atomWithStorage("nearAccount",'')
const PeopleAvatar = atom("https://cdn.discordapp.com/attachments/897398778166906911/967989384240574484/finish.png")
const PeopleEmail = atomWithStorage("user_Email",'')
const PeopleName = atomWithStorage("user_Name","Learning")
const PeopleGender = atomWithStorage("user_Gender","secret")
const PublicKey = atomWithStorage("publicKey","")
const SecretKey = atomWithStorage("SecretKey","")
const SeedPhrase = atomWithStorage("SeedPhrase","")
const OpenAvatar = atom(false)
const OpenName = atom(false)
const OpenGender = atom(false)


const HiddenReciprocal = atomWithStorage("hiddenReciprocal",false)
const LoadingState  = atom(false)

const PetList = atom ([])
const pet_info = atom([])

export {GSTToken,GMTToken,NEARToken,PeopleAvatar,PeopleEmail,NearAccount,PeopleName,PublicKey,SecretKey,SeedPhrase,PeopleGender,OpenAvatar,OpenName,OpenGender
,LoadingState,PetList,pet_info,ExternalNEARToken,ExternalUSNToken,ExternalGSTToken,ExternalGMTToken,HiddenReciprocal}

