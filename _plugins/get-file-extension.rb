module Jekyll
  module AssetFilter
    def extension(filename)
      File.extname(filename)
    end
  end
end

Liquid::Template.register_filter(Jekyll::AssetFilter)