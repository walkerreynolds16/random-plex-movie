/*
<Video 
  ratingKey="10041" 
  key="/library/metadata/10041" 
  guid="plex://movie/5d77686c103a2d001f571373" 
  studio="CoMix Wave Films" 
  type="movie" 
  title="5 Centimeters per Second" 
  originalTitle="&#31186;&#36895;5&#12475;&#12531;&#12481;&#12513;&#12540;&#12488;&#12523;" 
  contentRating="PG" 
  summary="Told in three interconnected segments, we follow a young man named Takaki through his life as cruel winters, cold technology, and finally, adult obligations and responsibility converge to test the delicate petals of love." 
  audienceRating="8.8" 
  year="2007" 
  tagline="At what speed must I live to see you again?" 
  thumb="/library/metadata/10041/thumb/1678692099" 
  art="/library/metadata/10041/art/1678692099" 
  duration="3766025" 
  originallyAvailableAt="2007-03-03" 
  addedAt="1609051773" 
  updatedAt="1678692099" 
  audienceRatingImage="rottentomatoes://image.rating.upright" 
  chapterSource="media">
        <Media id="20089" duration="3766025" bitrate="7446" width="1920" height="1080" aspectRatio="1.78" audioChannels="5" audioCodec="dca" videoCodec="h264" videoResolution="1080" container="mkv" videoFrameRate="24p" audioProfile="dts" videoProfile="high">
            <Part id="20099" key="/library/parts/20099/1609051404/file.mkv" duration="3766025" file="F:\Movies\5 Centimeters per Second (2007)\5.Centimeters.per.Second.2007.Bluray-1080p.mkv" size="3506371077" audioProfile="dts" container="mkv" indexes="sd" videoProfile="high" />
    </Media>
    <Genre tag="Animation" />
    <Genre tag="Drama" />
    <Director tag="Makoto Shinkai" />
    <Writer tag="Makoto Shinkai" />
    <Country tag="Japan" />
    <Role tag="Kenji Mizuhashi" />
    <Role tag="Yoshimi Kondou" />
    <Role tag="Satomi Hanamura" />
</Video>

*/

export interface IMediaContainer {
  MetaData: IMovieData[]
}

export interface IMovieData {
  key: string,
  title: string,
  summary: string,
  duration: string,
  year: string,
  audienceRating: string,
  studio: string
  tagline?: string
}
