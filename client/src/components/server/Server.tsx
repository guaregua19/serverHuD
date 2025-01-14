import { useHistory } from "react-router-dom";
import {
  Main,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
} from "grommet";
import io from "socket.io-client";
import { useEffect, useState } from "react";
import { cloneDeep } from "lodash";

const Server = (props: any) => {

  const [currServerState, setCurrServerState] = useState(props.serverData);

  useEffect(() => {

    const socket = io("localhost:3001", {
      auth: {
        token: localStorage.getItem("accessToken")
      },
      transports: ["websocket"],
    });

    function connectEvent() {
      console.log("Connected to " + socket.id, " sending url: ", props.serverData.url);
      socket.emit('upCheck', {id: props.serverData.id, url: props.serverData.url })
      socket.emit('sslCheck', {id: props.serverData.id, url: props.serverData.url})
    }

    function statUpdate(statusUpdate: any) {
        console.log("Status Update: ", statusUpdate)
        let internalServer = cloneDeep(currServerState);
        for (const [key, value] of Object.entries(statusUpdate)) {
          if(internalServer[key] !== value) {
            internalServer[key] = value;
          }
        }
        setCurrServerState(internalServer);
    }

    socket.on("connect", connectEvent);
    socket.on('serverUpdate', statUpdate)

    return () => {
      socket.disconnect();
    };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const history = useHistory();

  return (
    <Main pad="medium">
      <Card background="light-1">
        {currServerState.status === "down" ? (
          <CardHeader background="status-error" pad="small">
            {currServerState.name}
          </CardHeader>
        ) : currServerState.status === "up" &&
          currServerState.sslStatus === "false" ? (
          <CardHeader background="status-warning" pad="small">
            {currServerState.name}
          </CardHeader>
        ) : (
          <CardHeader background="dark-1" pad="small">
            {currServerState.name}
          </CardHeader>
        )}
        <CardBody pad="small">
          <Box>Server URL: {currServerState.url}</Box>
          <Box>
            Server Status: {currServerState.status === "up" ? "Up" : "Down!"}
          </Box>
          <Box>
            SSL: {currServerState.sslStatus === "true" ? "Active" : "Down!"}
          </Box>
        </CardBody>
        <CardFooter
          pad="small"
          background="light-2"
          align="center"
          justify="center"
        >
          <Button
            plain={false}
            onClick={() => history.push("/server/" + currServerState.id)}
          >
            More Info
          </Button>
        </CardFooter>
      </Card>
    </Main>
  );
};

export default Server;
