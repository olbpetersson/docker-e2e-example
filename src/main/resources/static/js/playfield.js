var PlayField = React.createClass({

    getInitialState: function(){
        return {data: []};
    },

    componentDidMount: function(){
        this.connectToLobbies();
    },

    connectToLobbies: function(){
        var stompClient = null;
        var component = this;
        function setComponentState(data){
            component.setState(data);
        }
        function connect() {
            var socket = new WebSocket('ws://localhost:8080/test');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, function(frame) {
                console.log('Connected: ' + frame);
                initLobbies();
                stompClient.subscribe('/topic/lobbies', function(data){
                    console.log(data.body);
                    setComponentState({data: JSON.parse(data.body)});
                });
            });
        }

        function initLobbies(){
            stompClient.send("/app/lobbies/init", {}, "init");
        }

        function disconnect() {
            if (stompClient != null) {
                stompClient.disconnect();
            }
            console.log("Disconnected");
        }
        connect();
    },
    render: function(){
        var lobbies = [];
        var lobbyData = this.state.data;
        console.log(lobbyData.length);
        for(var i =0; i < lobbyData.length; i++){
            lobbies.push(<LobbyCard title={lobbyData[i].name} key={lobbyData[i].name} />);
        }
        return (
            <div className="jumbotron container-fluid">
                <h2>Lobbies</h2>
                {lobbies}
            </div>
        );
    }
});

var LobbyCard = React.createClass({
    render: function(){
        var title = this.props.title;
        return (
            <div className="jumbotron lobby-card">
                <h3>{title}</h3>
            </div>
        );
    }
});

ReactDOM.render(
    <PlayField />,
    document.getElementById("container")
);
