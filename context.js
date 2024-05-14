const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;

const UserContext = React.createContext(null);
const currentUserContext = React.createContext({name: '', email: '', password: '', balance: 0, checking: false, savings: false, index: 0, loginStatus: false, history:[]});

function Card(props){
    function classes(){
        const bg = props.bgcolor ? ' bg-' + props.bgcolor: ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' ';
        return 'card mb-3 ' + bg + txt; 
    }


    return(
        <div className="col d-flex justify-content-center">
        <div className={classes()} style={{maxWidth:"30rem"}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>

        </div>
        </div>  
    );

}