import React, { useContext } from 'react'

const Name = React.createContext()
const Group = React.createContext()

const Komponen = () => {
  return (
    <Name.Provider value={'Praktikan'}>
      <Group.Provider value={'11'}>
        <DataKomponen />
      </Group.Provider>
    </Name.Provider>
  )
}

const DataKomponen = () => {
  const nama = useContext(Name)
  const kelompok = useContext(Group)

  return (
    <h1 className='Main'>
      Halo Saya {nama} dari kelompok {kelompok} telah melakukan perubahan pada useContext.
    </h1>
  )
}

export default Komponen;
