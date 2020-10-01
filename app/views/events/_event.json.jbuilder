json.extract! event, :id, :name, :type, :hostId, :time, :created_at, :updated_at
json.url event_url(event, format: :json)
