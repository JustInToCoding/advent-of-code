start = System.monotonic_time()

File.stream!("./input.txt")
|> Stream.map(&String.replace(&1, "\n", ""))
|> Stream.map(&Integer.parse(&1))
|> Enum.reduce(0, fn {value, _}, acc ->
  acc + value
end)
|> IO.inspect()

finish = System.monotonic_time()
diff = finish - start
IO.inspect(diff)
