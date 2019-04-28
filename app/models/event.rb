class Event < ApplicationRecord
  def date_str
    self.datetime.strftime("%Y-%m-%d")
  end
end
