export const StoriesContainer = ({ photo }) => {
    return (
        <div className="stories-container">
            <img className="stories-image" src={photo.download_url} alt={`taken by ${photo.author}`} />
            <p>{photo.author}</p>
        </div>
    );
};
