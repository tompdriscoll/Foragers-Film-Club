export const newEvent = event => (
    $.ajax({
      method: 'POST',
      url: '/api/event',
      data: { event }
    })
  );
  
  export const deleteEvent = () => (
    $.ajax({
      method: 'DELETE',
      url: '/api/event/:id'
    })
  );
  
  export const allEvents = () => (
    $.ajax({
      method: 'GET',
      url: '/api/events',
      data: events
    })
  )