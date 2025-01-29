import{list,tuple,Color,notSure} from './MoreVariables';
const MoreVars = () => {
    return (
        <div>
            <h2>TypeScript Types Demo</h2>
            <p>Array: {list.join(', ')}</p>
            <p>Tuple: {tuple[0]} and {tuple[1]}</p>
            <p>Enum: {Color.Red},{Color.Green},{Color.Blue}</p>
            <p>Any Type: {notSure}</p>
        </div>
    );
};
export default MoreVars;