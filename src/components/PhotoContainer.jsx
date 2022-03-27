export const PhotoContainer = ({ photo }) => {
    let randnum = Math.round(Math.random() * 10000);

    return (
        <div className="photo-container">
            <p className="photo-user">
                <img
                    src={photo.download_url}
                    className="photo-avatar"
                    alt={`user image for ${photo.author}`}
                />
                {photo.author}
            </p>
            <img
                src={photo.download_url}
                alt={`taken by ${photo.author}`}
                className="photo-container-image"
            />
            <div className="photo-buttons">
                <ul>
                    <li>Like</li>
                    <li>Comment</li>
                    <li>Share</li>
                    <li>...</li>
                    <li>Bookmark</li>
                </ul>
            </div>
            <div className="photo-likes">
                <p>
                    Liked by <em>{photo.author}</em> and <em>{randnum}</em>{" "}
                    others
                </p>
            </div>
            <div className="photo-comments">
                <p>
                    <em>{photo.author}</em> blahblahblah
                </p>
                <p>{`View all ${randnum} comments`}</p>
            </div>
        </div>
    );
};
