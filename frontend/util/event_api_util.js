export const newEvent = event => (
    $.ajax({
      method: 'POST',
      url: '/api/event/new',
      data: { event }
    })
  );
  
  export const deleteEvent = () => (
    $.ajax({
      method: 'DELETE',
      url: '/api/event/:id'
    })
  );
  