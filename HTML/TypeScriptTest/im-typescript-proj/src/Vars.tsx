import {age,fname,isStudent,unknown,notDef,key} from './Variables';
const Vars = () => {
    return (
        <div>
            <p>Age: {age}</p>
            <p>Name: {fname}</p>
            <p>Is Student: {isStudent ? 'Yes' : 'No'}</p>
            <p>Unknown: {unknown}</p>
            <p>Not Defined: {notDef}</p>
            <p>Symbol Key: {key.toString()}</p>
        </div>
    );
};
export default Vars;