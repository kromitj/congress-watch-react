require "#{Rails.root}/lib/assets/paginator/paginator.rb"

class BillsController < ApplicationController
	def index
		@bills = Rails.cache.fetch("bills_list", expires_in: 12.hours) do
			Bill.all.map { |bill| bill.pack_bill_list_item}
		end

		page_requested = params[:page].to_i
		puts "page requested------------------------"
		puts page_requested
		@paginator = Paginator.new(@bills, 100, page_requested)
		@paged_bills = @paginator.pack_page_data
		if request.xhr?
      		render json: {status: true, bills: @paged_bills}
    	else
      		render 'new'
    	end
	end

	def show
		@bill =  Rails.cache.fetch("#{params[:id]}bill", expires_in: 12.hours) do
			Bill.find_by({id: params[:id]}).pack_bill_show
		end
		if request.xhr?
      		render json: {status: true, bill: @bill}
    	else
      		render 'show'
    	end
	end
end
