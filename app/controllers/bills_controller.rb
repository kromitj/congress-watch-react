class BillsController < ApplicationController
	def index
		@bills = Rails.cache.fetch("bills_list", expires_in: 12.hours) do
			Bill.all.map { |bill| bill.pack_bill_list_item}
		end      
		if request.xhr?
      		render json: {status: true, bills: @bills}
    	else
      		render 'new'
    	end
	end

	def show
		@bill =  Rails.cache.fetch("#{params[:id]}bill", expires_in: 12.hours) do
			Bill.find_by({id: params[:id]}).pack_bill_show
		end
		puts "------------------ bil ----------------------"      
		puts @bill
		if request.xhr?
      		render json: {status: true, bill: @bill}
    	else
      		render 'show'
    	end
	end
end
