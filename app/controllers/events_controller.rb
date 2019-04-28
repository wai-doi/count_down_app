class EventsController < ApplicationController
  def index
    @name = 'RubyKaigi 2020'
    @date = DateTime.new(2020, 4, 9)
  end
end
