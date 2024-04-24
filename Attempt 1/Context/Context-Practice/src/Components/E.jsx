import React from "react";
import { UserContext, ChannelContent } from "../App";

function E() {
  return (
    <>
      <UserContext.Consumer>
        {(user) => {
          return (
            <ChannelContent.Consumer>
              {(channel) => {
                return (
                  <div>
                    the context user value = {user} channel value = {channel}
                  </div>
                );
              }}
            </ChannelContent.Consumer>
          );
        }}
      </UserContext.Consumer>
    </>
  );
}

export default E;
