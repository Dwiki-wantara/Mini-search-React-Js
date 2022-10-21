import { useState } from "react";



function App() {

  const users = ([
    {
      nim : 18101,
      name : "Dwiki Wantara",
      date : "17 April 1998",
      gender : "Laki-Laki",
      fakultas : "Teknik",
      jurusan : "Teknik Informatika",
    },
    {
      nim : 18102,
      name : "Edi Rahmat",
      date : "21 September 1996",
      gender : "Laki-Laki",
      fakultas : "Teknik",
      jurusan : "Teknik Mesin",
    },
    {
      nim : 18104,
      name : "Gustiani",
      date : "15 April 1999",
      gender : "Perempuan",
      fakultas : "Sastra",
      jurusan : "Sastra Inggris",
    },
    {
      nim : 18103,
      name : "Maman Hadi",
      date : "11 Mei 1998",
      gender : "Laki-Laki",
      fakultas : "Hukum",
      jurusan : "Ilmu Hukum",
    },
    {
      nim : 18105,
      name : "Simon",
      date : "29 Desember",
      gender : "Laki-Laki",
      fakultas : "Ekonomi",
      jurusan : "Manajemen",
    },
    
  ]);

  const [dataCase, setdataCase] = useState("");
  const [searhParam] = useState(["nim"]);

  function search(items) {
    return items.filter((item) => {
      return searhParam.some((newItem) => {
        return (
          item[newItem].toString().toLowerCase().indexOf(dataCase.toLowerCase()) > -1
        );
      });
    });
  }

  let dataObject;
  let userNim;

  if(users?.length > 0){
    dataObject = Object.values(users);
    userNim = search(dataObject);
  }

  return (
    <>
      <div> 
        <h1 style={{ fontSize:"50px", fontWeight:"bold", textAlign:"center"}}>
         Data Mahasiswa
        </h1>

        <div style={{display:"flex", justifyContent:"center", textAlign:"center", marginBottom:"20px"}}>
          <div>
            <label>NIM</label>
            <input id="nim" type="number" placeholder="cari..." onChange={(e) => setdataCase(e.target.value)} ></input>
          </div>
        </div>

        <div style={{display:"flex", justifyContent:"center", textAlign:"center", alignItem:"center"}}>
          <table>
            <thead>
              <tr>
                <th style={{padding:"2px 40px", border:"1px solid black"}}>NIM</th>
                <th style={{padding:"2px 40px", border:"1px solid black"}}>NAMA LENGKAP</th>
                <th style={{padding:"2px 40px", border:"1px solid black"}}>TANGGAL LAHIR</th>
                <th style={{padding:"2px 40px", border:"1px solid black"}}>JENIS KELAMIN</th>
                <th style={{padding:"2px 40px", border:"1px solid black"}}>FAKULTAS</th>
                <th style={{padding:"2px 40px", border:"1px solid black"}}>JURUSAN</th>
              </tr>
            </thead>
            <tbody>

              {userNim?.length > 0 ? (
                userNim?.map((item, k) => (
              <tr key={k}>  
                <td style={{padding:"2px 0px", border:"1px solid black"}}>{item.nim}</td>
                <td style={{padding:"2px 0px", border:"1px solid black"}}>{item.name}</td>
                <td style={{padding:"2px 0px", border:"1px solid black"}}>{item.date}</td>
                <td style={{padding:"2px 0px", border:"1px solid black"}}>{item.gender}</td>
                <td style={{padding:"2px 0px", border:"1px solid black"}}>{item.fakultas}</td>
                <td style={{padding:"2px 0px", border:"1px solid black"}}>{item.jurusan}</td>
              </tr>
                ))
              ) : (
                <div>Not Found</div>
              ) 
            }
              
            </tbody>
          </table>
        </div>

      </div>
    </>
  );
}

export default App;
