interface Props {
    selected: string;
}
const Content = (props: Props) => {
    return (
        <>
            <div className='content'>
                <h2>This is page {props.selected}</h2>
            </div>
        </>
    );
};
export default Content;
