import "./MainPieLabel.css";

const MainPieLabel = props => {
    const { name, color } = props;
    return (
        <div className='pieLabel'>
            <span className='labelColorBar' style={{backgroundColor: color}}></span>
            <span className='labelText'>{name}</span>
        </div>
    );
};

export default MainPieLabel;