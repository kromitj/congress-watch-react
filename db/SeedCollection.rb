require 'httparty' 

class SeedCollection
	attr_accessor :collection_group
	def initialize(model, collection_name, singular, fields, belongs_to=[], change_headers= [], remove_headers=[])
		@name = collection_name
		@fields = fields
		@singular = singular
		@model = model
		@belongs_to = belongs_to # [class, field_id, record_field, target_field]
		@change_headers = change_headers # { committee}
		@remove_headers = remove_headers
	end

	def seed_records(response)
		if @singular
			seed_record(response)
		else
			records = response[@name]
			records.each { |record| seed_record(record)}
		end
	end
	
	def seed_record(data)
		@record_fields = Hash[@fields.map { |field| [field, data[field]] }]
		handle_belongs_to.handle_headers.remove_headers
		puts @record_fields
		@model.create(@record_fields)
	end

	def handle_belongs_to
		return self if @belongs_to.empty?	
		@belongs_to.map do |belong_to|
			parentClass = belong_to["class"] 
			parent_obj = parentClass.where({ belong_to["field_id"] => @record_fields[belong_to["record_field"]]}).first
			@record_fields[belong_to["record_field"]] = parent_obj
		end
		return self
	end

	def handle_headers
		return record_fields if @change_headers.empty?		
		@change_headers.each { |header_change| @record_fields[header_change["to"]] = @record_fields[header_change["from"]] }
		return self
	end

	def remove_headers
		return self if @remove_headers.empty?
		@remove_headers.each { |header| @record_fields.delete(header) }
		return self
	end

end