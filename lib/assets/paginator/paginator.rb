class Paginator	
	attr_reader :paginated_items
	
	def initialize(items, items_per_page, page_requested)
		@items_per_page = items_per_page
		@total_items = items.count
		@page = page_requested-1
		@pages = calc_pages()
		@page_min = @page*@items_per_page
		@page_max = @page_min+@items_per_page
		@paginated_items = paginate_items(items)
	end


	def pack_page_data
		{pages: @pages, page: @page+1, items: @paginated_items}
	end
	private
	def calc_pages
		(@total_items.to_f/@items_per_page).ceil
	end
	def paginate_items(items)
		if @page == @pages-1
			puts "page == pages"
			items[@page_min...-1]
		else
			puts "page != pages"
			puts @page_min
			puts @page_max
			items[@page_min...@page_max]
		end
	end
end