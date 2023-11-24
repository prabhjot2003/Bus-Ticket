function searchbuses() {
  const from = document.getElementById('starting').value
  const to = document.getElementById('ending').value
  const date = document.getElementById('date').value

  const busData = getBusData(from, to, date)

  displayBusList(busData)
}

function getBusData(from, to, date) {
  const buses = [
    {from: 'Assam', to: 'Delhi', time: '10;00 AM'},
    {from: 'Assam', to: 'Himachal', time: '10;00 pM'},
    {from: 'Chandigarh', to: 'Delhi', time: '12;00 pM'},
    {from: 'Chandigarh', to: 'Delhi', time: '02;00 AM'},
    {from: 'Assam', to: 'Delhi', time: '09;00 pM'},
    {from: 'Assam', to: 'Himachal', time: '08;00 AM'},  
    {from: 'Chandigarh', to: 'Delhi', time: '04;00 pM'},
    {from: 'Chandigarh', to: 'Uttrakhand', time: '06;00 AM'},
    {from: 'Assam', to: 'Himachal', time: '01;00 pM'},
    {from: 'Assam', to: 'Uttrakhand', time: '12;00 AM'},
    {from: 'Chandigarh', to: 'Uttrakhand', time: '11;00 pM'},
    {from: 'Assam', to: 'Delhi', time: '01;00 pM'}
  ]

  const filteredBuses = buses.filter((bus) => bus.from === from && bus.to === to)

  return filteredBuses
}

function displayBusList(busData) {
  const busListDiv = document.getElementById('buslist')
  busListDiv.innerHTML = '' 

  if (busData.length === 0) {
    busListDiv.innerHTML = 'No buses available for the selected route and date.'
    return
  }

  const p = document.createElement('p')
  busData.forEach((bus) => {
    const pre = document.createElement('pre')
    const input = document.createElement('input')
    input.setAttribute("id", "booknow");
    input.setAttribute("type", "button");
     input.setAttribute("onclick", "clickit()");
    
    input.value = 'view seats'
    pre.textContent = `From: ${bus.from}, To: ${bus.to}, Time: ${bus.time}`
    p.appendChild(pre)
    
    pre.appendChild(input)
  })
          
  busListDiv.appendChild(p)
  
}

function clickit(){
    window.location.href = '../busseats.html';
  
}