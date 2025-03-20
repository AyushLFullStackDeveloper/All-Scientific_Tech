import Heading from './Heading';

const FeatureBox = ({ icon, title }) => {
    return (
        <div className="feature-box">
            <div className="feature-icon">
                <img src={icon} alt={title} />
            </div>
            <Heading level={3}>{title}</Heading>
        </div>
    );
};

export default FeatureBox;
