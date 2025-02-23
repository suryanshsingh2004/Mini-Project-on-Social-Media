import "./share.css"
// import {PermMedia,Label,Room,EmojiEmotions} from "@material-ui/icons"
export default function Share(){
    return(
        <div className="share">
            <div className="shareWrapper">
                
                <div className="shareTop">
                    <img className="shareProfileImg" src="assets/person/img1.jpg" alt="" />
                    <input placeholder="What is in your mind?"
                    classname="shareInput"
                    />
                </div>
                <hr className="shareHr" />
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            {/* <PermMedia htmlColor="tomato" className="shareIcon"/> */}
                            <span className="shareOptionText">Photo or Video</span>
                        </div>
                        <div className="shareOption">
                            {/* <Label htmlColor="tomato" className="shareIcon"/> */}
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            {/* <Room htmlColor="tomato" className="shareIcon"/> */}
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            {/* <EmojiEmotions htmlColor="tomato" className="shareIcon"/> */}
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button> 
                </div>
            </div>
        </div>
    )
}