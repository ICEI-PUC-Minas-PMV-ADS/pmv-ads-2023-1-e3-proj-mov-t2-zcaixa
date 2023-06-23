import React, {createContext, useState, useContext} from 'react';
import {Lancamentos} from '../services/lancamentos.services';

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
    ultimoNome:string;
    setUltimoNome: (value: string) => void;
    email: string;
    setEmail: (value: string) => void;
    telefone: string;
    setTelefone: (value: string) => void;
    dataNascimento: Date | string;
    setDataNascimento: (value: Date | string) => void;
    senha: string;
    setSenha: (value: string) => void;
    lancamentosUsuario: Lancamentos[];
    setLancamentos: (value: Lancamentos[]) => void;
    lancamento: number;
    setLancamento: (value: number) => void;

    
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
    setAnoConsulta: () => {},
    ultimoNome: '',
    setUltimoNome: () => {},
    email: '',
    setEmail: () => {},
    telefone: '',
    setTelefone: () => {},
    dataNascimento: '',
    setDataNascimento: () => {},
    senha: '',
    setSenha: () => {},
    lancamentosUsuario: [],
    setLancamentos: () => {},
    lancamento: 0,
    setLancamento: () => {},

  });

  export default function UserProvider({ children }: { children: React.ReactNode }) {
    const [signed, setSigned] = useState(false);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [meta, setMeta] = useState(0);
    const [mesConsulta, setMesConsulta] = useState(0);
    const [anoConsulta, setAnoConsulta] = useState(0);
    const [ultimoNome, setUltimoNome] = useState('');
    const [email, setEmail] = useState('');
    const [dataNascimento, setDataNascimento] = useState<Date | string>('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [lancamentosUsuario, setLancamentos] = useState<Lancamentos[]>([]);
    const [lancamento, setLancamento] = useState(0);


  
    return (
      <UserContext.Provider value={{ signed, setSigned, name, setName, username, setUsername, meta, setMeta, mesConsulta, setMesConsulta, anoConsulta, setAnoConsulta, ultimoNome, setUltimoNome, email, setEmail, telefone, setTelefone, dataNascimento, setDataNascimento, senha, setSenha, lancamentosUsuario, setLancamentos, lancamento, setLancamento}}>
        {children}
      </UserContext.Provider>
    );
  }



  export function useUser() {
    const context = useContext(UserContext);
    const {
      signed,
      setSigned,
      name,
      setName,
      username,
      setUsername,
      meta,
      setMeta,
      mesConsulta,
      setMesConsulta,
      anoConsulta,
      setAnoConsulta,
      ultimoNome,
      setUltimoNome,
      email,
      setEmail,
      telefone,
      setTelefone,
      dataNascimento,
      setDataNascimento,
      senha,
      setSenha,
      lancamentosUsuario,
      setLancamentos,
      lancamento,
      setLancamento
    } = context;
    return {
      signed,
      setSigned,
      name,
      setName,
      username,
      setUsername,
      meta,
      setMeta,
      mesConsulta,
      setMesConsulta,
      anoConsulta,
      setAnoConsulta,
      ultimoNome,
      setUltimoNome,
      email,
      setEmail,
      telefone,
      setTelefone,
      dataNascimento,
      setDataNascimento,
      senha,
      setSenha,
      lancamentosUsuario,
      setLancamentos,
      lancamento,
      setLancamento
    };
  }
