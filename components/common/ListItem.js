const ListItem = ({ name, icon }) => {
    return (
      <div className="item">
        <div className="item-content">
          <span className="item-icon">{icon}</span>
          <span className="item-name">{name}</span>
        </div>
      </div>
    );
  };
  
  export default ListItem;
  