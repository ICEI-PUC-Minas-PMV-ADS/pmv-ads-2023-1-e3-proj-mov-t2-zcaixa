import React, {createContext, useState, useContext} from 'react';

interface UserContextValue {
    signed: boolean;
    setSigned: (value: boolean) => void;
    name: string;
    setName: (value: string) => void;
    username: string;
    setUsername: (value: string) => void;
    meta: number;
    setMeta: (value: number) => void;
    mesConsulta: number;
    setMesConsulta: (value: number) => void;
    anoConsulta:number;
    setAnoConsulta: (value: number) => void;


  }

  export const UserContext = createContext<UserContextValue>({
    signed: false,
    setSigned: () => {},
    name: '',
    setName: () => {},
    username: '',
    setUsername: () => {}, 
    meta: 0,
    setMeta: () => {},
    mesConsulta: 0,
    setMesConsulta: () => {},
    anoConsulta: 0,
    setAnoConsulta: () => {}

  });

  export default function UserProvider({ children }: { children: React.ReactNode }) {
    const [signed, setSigned] = useState(false);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [meta, setMeta] = useState(0);
    const [mesConsulta, setMesConsulta] = useState(0);
    const [anoConsulta, setAnoConsulta] = useState(0);
  
    return (
      <UserContext.Provider value={{ signed, setSigned, name, setName, username, setUsername, meta, setMeta, mesConsulta, setMesConsulta, anoConsulta, setAnoConsulta}}>
        {children}
      </UserContext.Provider>
    );
  }

export function useUser(){

const context = useContext(UserContext);

const {signed, setSigned, name, setName, username, setUsername, meta, setMeta, mesConsulta, setMesConsulta, anoConsulta, setAnoConsulta} = context;

return {signed, setSigned, name, setName, username, setUsername, meta, setMeta, mesConsulta, setMesConsulta, anoConsulta, setAnoConsulta};

}