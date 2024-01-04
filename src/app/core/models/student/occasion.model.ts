export class Occasion{
  constructor(
  public date: Date,
  public title: String,
	public description: String,
	public subjects: Array<String>
  ){}
}