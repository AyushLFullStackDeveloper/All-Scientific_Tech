import Heading from './Heading';

const ServiceCategory = ({ image, label }) => {
    return (
        <div className="service-category">
            <div className="category-image">
                <img src={image} alt={label} />
            </div>
            <Heading level={3}>{label}</Heading>
        </div>
    );
};

export default ServiceCategory;
