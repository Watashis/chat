import React, { useEffect, useRef, useState } from 'react';
import { Frame, Title, Input } from '../components';
import { IMessage } from '../modules/api.types';
import { useParams } from 'react-router-dom';
import Api from '../modules/api';
declare var window: any;



function ChatPage() {
  const FrameRef = useRef<any>(null);
  const api: Api = window.api;
  const SendMessage = (text: string) => {
    //FrameRef.current?.addMessage(msg)
    //console.log(text)
    api.sendMessage(text)
  }
  const { id } = useParams();
  api.addMessage = (msg:IMessage) => {
    FrameRef.current?.addMessage(msg)
  }
  return (
    <>
      <Title>{`Chat #${id}`}</Title>
      <Frame ref={FrameRef}></Frame>
      <Input SendMessage={SendMessage}></Input>
    </>
  );
}

export default ChatPage;
