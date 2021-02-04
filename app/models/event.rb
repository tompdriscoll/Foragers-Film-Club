class Event < ApplicationRecord

    validates :name, :type, :hostId, :time
end
