export interface IuserInterface {
    userName: String,
    profilePic: String,
    email: String,
    password: String,
    phoneNumber: Number,
    role: String,
    isVerified:Boolean
};

export interface IuserState {
    user: IuserInterface | null,
    isLoading:false
}