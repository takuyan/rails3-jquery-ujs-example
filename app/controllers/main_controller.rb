class MainController < ApplicationController

  before_filter :get_time, :except => [:index]

  def index
  end

  def up 
  end 

  def down 
  end

  def left 
  end

  def right 
  end

  private 
    
    def get_time 
      @time = Time.now
    end

end
